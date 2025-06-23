import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.nav`
  margin-top: 1.25rem;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '/';
    margin: 0 .5rem;
  }

  .current-bread__crumb {
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: .75px;
  }

  @media screen and (max-width: 769px) {
    .current-bread__crumb {
      font-size: .75rem;
      line-height: 1.125rem;
      letter-spacing: .5px;
    }
  }
`;

const BreadcrumbLink = styled(Link)`
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.375rem;
    letter-spacing: .75px;

    &:hover {
        text-decoration: underline;
    }

    &.weight-link {
        font-weight: 700;
    }

    @media screen and (max-width: 769px) {
      font-size: .75rem;
      line-height: 1.125rem;
      letter-spacing: .5px;

      &.weight-link {
        line-height: 1.5rem;
        letter-spacing: .75px;
      }
    }
`;

function Breadcrumb({ items }) {
  return (
    <BreadcrumbWrapper aria-label="breadcrumb">
      <BreadcrumbList>
        {items.map((item, index) => {
          const primeiro = index === 0;
          const ultimo = index === items.length - 1;

          return (
            <BreadcrumbItem key={index}>
                {primeiro ? (
                    <BreadcrumbLink to={item.link} className="weight-link" >{item.label}</BreadcrumbLink>
                ) : (
                    ultimo ? (
                        <span className="current-bread__crumb">{item.label}</span>
                    ) : (<BreadcrumbLink to={item.link}>{item.label}</BreadcrumbLink>)
                )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
}

export default Breadcrumb;
