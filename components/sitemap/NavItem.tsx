import React from 'react';
import { MenuProps } from '../../libs/types';

function NavItem({ title, url, items }: MenuProps) {
  return (
    <div className="col-sm-3">
      <h3 className="font-weight-bold text-4 mb-2">{title}</h3>
      <ul className="list list-icons list-icons-sm mb-4">
        {items ? (
          <>
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.subUrl}>
                  <i className="far fa-file" />
                  {item.subTitle}
                </a>
              </li>
            ))}
          </>
        ) : (
          <li>
            <a href={url}>
              <i className="far fa-file" />
              {title}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavItem;
