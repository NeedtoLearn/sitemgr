import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Table } from 'reactstrap';
import ActionDropDown from './ActionDropDown';

export default class SiteManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"sites": []};
  }

  componentDidMount() {
    /* Fetch available sites from server */
    // const res = await fetch('');
    // const json = await res.json();
    const res = [
    {
      "name": "MNTestSite",
      "status": "STOPPED",
      "port": "8080",
      "version": "9.9.99"
    }];
    this.setState((prevState, props) => {
      return {"sites": res};
    });
  }

  renderTable() {
    return (
      <Table hover>
        { this.renderTableHead() }
        { this.renderTableBody() }
      </Table>
    )
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Site</th>
          <th>Status</th>
          <th>Port</th>
          <th>Version</th>
        </tr>
      </thead>
    )
  }

  renderTableBody() {
    const siteItems = this.state.sites.map(
      (site, idx) => this.renderSite(site, idx), this);
    return (
      <tbody>
        { siteItems }
      </tbody>
    )
  }

  renderSite(site, idx) {
    return (
      <tr key={idx}>
        <th><ActionDropDown/></th>
        <th scope="row">{site.name}</th>
        <td>{site.status}</td>
        <td>{site.port}</td>
        <td>{site.version}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <Head>
          <title>Site Manager</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        { this.renderTable() }
      </div>
    )
  }
}
