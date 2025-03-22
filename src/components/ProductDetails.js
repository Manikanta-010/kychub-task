import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  const handleCompare = (product) => {
    if (comparedProducts.length < 4 && !comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts([...comparedProducts, product]);
      navigate('/compare');
    }
  };

  const columns = [
    { 
      title: 'Title', 
      dataIndex: 'title', 
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (text) => <span style={{ color: '#333', fontWeight: '500' }}>{text}</span>,
    },
    { 
      title: 'Description', 
      dataIndex: 'description',
      render: (text) => <span style={{ color: '#666' }}>{text}</span>,
    },
    { 
      title: 'Price', 
      dataIndex: 'price', 
      sorter: (a, b) => a.price - b.price,
      render: (text) => <span style={{ color: '#2ecc71', fontWeight: '600' }}>${text}</span>,
    },
    { 
      title: 'Discount %', 
      dataIndex: 'discountPercentage',
      render: (text) => <span style={{ color: '#e74c3c' }}>{text}%</span>,
    },
    { 
      title: 'Brand', 
      dataIndex: 'brand',
      render: (text) => <span style={{ color: '#555' }}>{text || 'N/A'}</span>,
    },
    { 
      title: 'Category', 
      dataIndex: 'category',
      render: (text) => <span style={{ textTransform: 'capitalize', color: '#555' }}>{text}</span>,
    },
    { 
      title: 'Image', 
      dataIndex: 'thumbnail', 
      render: (text) => (
        <img 
          src={text} 
          alt="product" 
          style={{ 
            width: '50px', 
            borderRadius: '4px', 
            transition: 'transform 0.3s ease', 
          }} 
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')} 
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} 
        />
      ),
    },
    {
      title: 'Compare',
      render: (_, record) => (
        <Button
          disabled={comparedProducts.some(p => p.id === record.id)}
          onClick={() => handleCompare(record)}
          style={{
            background: comparedProducts.some(p => p.id === record.id) ? '#d3d3d3' : '#4A90E2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '5px 15px',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => !comparedProducts.some(p => p.id === record.id) && (e.target.style.background = '#357ABD')}
          onMouseLeave={(e) => !comparedProducts.some(p => p.id === record.id) && (e.target.style.background = '#4A90E2')}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <div 
  style={{ 
    padding: '40px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
    minHeight: '100vh', 
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.03)',
  }}
>
  <h1 
    style={{ 
      fontSize: '32px',
      color: '#2c3e50',
      marginBottom: '30px',
      fontFamily: 'Poppins, sans-serif', 
      fontWeight: '700',
      letterSpacing: '0.5px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #2c3e50, #3498db)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Product Details
  </h1>
  <Table
    columns={columns}
    dataSource={products}
    pagination={{ pageSize: 10 }}
    rowKey="id"
    style={{ 
      background: '#fff', 
      borderRadius: '12px',
      overflow: 'hidden', 
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
      border: '1px solid #ececec',
    }}
    rowHoverable={true}
  />
</div>
  );
};

export default ProductDetails;