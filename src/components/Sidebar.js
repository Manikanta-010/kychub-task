import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{
        width: '220px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        height: 'calc(100vh - 70px)',
        padding: '25px 15px',
        boxShadow: '3px 0 10px rgba(0, 0, 0, 0.08)',
        borderRight: '1px solid #ececec',
        position: 'sticky',
        top: '70px',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '15px' }}>
          <Link
            to="/products"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 18px',
              textDecoration: 'none',
              color: '#2c3e50',
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(to right, #4A90E2, #357ABD)';
              e.target.style.color = '#ffffff';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#2c3e50';
              e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            Product Details
            <span
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '4px',
                height: '100%',
                background: '#4A90E2',
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scaleY(1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scaleY(0)')}
            />
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link
            to="/compare"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 18px',
              textDecoration: 'none',
              color: '#2c3e50',
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(to right, #4A90E2, #357ABD)';
              e.target.style.color = '#ffffff';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#2c3e50';
              e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            Compare Products
            <span
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '4px',
                height: '100%',
                background: '#4A90E2',
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scaleY(1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scaleY(0)')}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;