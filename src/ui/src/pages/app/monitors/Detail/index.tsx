import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar4, Calendar4Range, ChevronRight, CpuFill, Table } from 'react-bootstrap-icons';

import MonitorService from 'services/monitors';
import BootstrapPage from 'components/BootstrapPage';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import { Server, Diagram3 } from 'react-bootstrap-icons';
import { Tab, Tabs } from 'react-bootstrap';

import ExecutionsTable from './components/ExecutionsTable';

const MonitorsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [monitor, setMonitor] = useState<any>(null);
  const [metrics, setMetrics] = useState([]);

  const loadMonitor = async () => {
    let res = await MonitorService.get(id);
    if (res && res.monitor) {
      setMonitor(res.monitor);
    }
  };

  const loadMetrics = async () => {
    let res = await MonitorService.getMetrics(id);
    if (res && res.metrics) {
      setMetrics(res.metrics);
    }
  };

  useEffect(() => {
    loadMonitor().then(() => loadMetrics());
  }, []);

  const titleCase = (input: string) => {
    return input.split('_').map((el: string) => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
  }

  const columns = [
    {
      dataField: "status",
      text: "Status",
      formatter: (cell: any, row: any) => {
        return (
          <span className="badge rounded-pill bg-success">Healthy</span>
        );
      } 
    },
    {
      dataField: "column_name",
      text: "Column",
      sort: true,
    },
    {
      dataField: "metric",
      text: "Metric",
      formatter: (cell: any, row: any) => {
        return titleCase(row.metric);
      },
      filterValue: (cell: any, row: any) => {
        return titleCase(row.metric);
      },
      sort: true,
    },
    {
      text: "",
      dataField: "",
      formatter: (cell: any, row: any) => {
        if (monitor) {
          return (
            <a href={"/monitors/" + monitor.id + "/metrics?column_name=" + row.column_name + "&metric=" + row.metric} type="button" className="btn btn-sm btn-outline-secondary">View</a>
          );
        } else { 
          return <a href="#">Pending</a>;
        }
      }
    },
  ];

  const emptyState = () => {
    return (
      <div className="p-4 py-2 mb-4 rounded-3" style={{background: '#f1f1f1'}}>
        <div className="container-fluid py-5">
          <h1 className="display-7 fw-bold">Pending</h1>
          <p className="col-md-10 fs-4">This monitor is still scheduled to run. Please check back shortly to see results.
          </p>
         <small>If you are still seeing this message after 24 hours, <a href="https://github.com/monosidev/monosi/issues" target="_blank">please submit an issue.</a></small>
        </div>
      </div>
    )
  }
  
  const table = () => {
    if (metrics.length == 0) {
      return emptyState();
    }
    else {
          return (
          <ToolkitProvider
            keyField="id"
            data={metrics}
            columns={columns}
            search
            >
            {
                props => (
                  <div>
                    <div style={{display: 'flex', placeContent: 'space-between'}}>
                      <h3 style={{margin: '0rem 0rem 1.5rem 0'}}>Metrics</h3>
                      <Search.SearchBar { ...props.searchProps } />
                    </div>
                    <div className="table-responsive custom-table custom-table-responsive">
                      <BootstrapTable
                        { ...props.baseProps }
                        bordered={false}
                        pagination={paginationFactory({ sizePerPage: 10 })}
                      />
                    </div>
                  </div>
                )
            }
            </ToolkitProvider>
        );
    }
  }
  return (
    <BootstrapPage selectedTab="monitors">
      <div style={{paddingLeft: '96px'}}>
        <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item"><a href="/monitors" className="nav-link link-dark px-2 active" aria-current="page">Monitors</a></li>
              <li className="nav-item"><span className="nav-link link-dark px-2">/</span></li>
              <li className="nav-item"><span className="nav-link link-dark text-muted px-2">{monitor && monitor.table_name} - {monitor && titleCase(monitor.type)}</span></li>
            </ul>
          </div>
        </nav>
        <header className="py-3 border-bottom" style={{backgroundColor: '#fff'}}>
          <div className="container d-flex flex-wrap justify-content-center">
            <div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
              <div className="d-flex flex-column">
                <span className="fs-4">{monitor && monitor.table_name} - {monitor && titleCase(monitor.type)}</span>
                <span className="fs-10 text-muted">
                       <span><Table /> {monitor && monitor.table_name}</span>
                       <span style={{marginLeft: 20}}><Calendar4Range /> {monitor && monitor.timestamp_field}</span>
                </span>
              </div>
            </div>

            <div className="btn-toolbar my-2 text-muted" style={{alignContent: 'center'}}>
               <span><Server /> {monitor && monitor.database}</span>
               <span style={{marginLeft: 20}}><Diagram3 /> {monitor && monitor.schema}</span>
            </div>
          </div>
        </header>
      </div>
      <div style={{paddingLeft: '96px'}} className="pt-4 bg-light">
        <div className="container">
          <main className="col-md-12 ms-sm-auto col-lg-12">
            <Tabs defaultActiveKey="metrics" id="tabs" className="mb-4">
                <Tab eventKey="metrics" title="Metrics">
                    {table()}
                </Tab>
                <Tab eventKey="executions" title="Executions">
                  <ExecutionsTable monitor_id={monitor && monitor.id} />
                </Tab>
            </Tabs>
          </main>
        </div>
      </div>
    </BootstrapPage>
  );
};

export default MonitorsDetail;
