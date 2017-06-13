import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {
  history: WP.History;
}

function renderBreadcrumbs(history: WP.History) {
  const { pathname } = history.location;
  return pathname.substring(1).split('/') 
    .map(path => {
      const currentPath = pathname.substring(0, pathname.indexOf('path') + path.length);
      const pathTitle = path.split(/^-|_$/).join(' ').trim();
      return <BreadcrumbItem key={path} tag="span"><Link to={currentPath}> {pathTitle} </Link></BreadcrumbItem>;
    });
}

const Breadcrumbs = (props: Props): JSX.Element => (
  <div>
    <Breadcrumb tag="nav">
      <BreadcrumbItem tag="span">
        <Link to="/"> Home </Link>
      </BreadcrumbItem>
      {renderBreadcrumbs(props.history)}
    </Breadcrumb>
  </div>
);

export default Breadcrumbs;