import React, { useState } from 'react';
import { Button, Modal, Table } from 'antd';
import axios from 'axios';
import '@ant-design/v5-patch-for-react-19';

const CompareProducts = () => {
  const [comparedProducts, setComparedProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const showModal = () => {
    axios.get('https://dummyjson.com/products')
      .then(res => setAllProducts(res.data.products))
      .then(() => setIsModalVisible(true));
  };

  const handleAddProduct = (product) => {
    if (comparedProducts.length < 4 && !comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const handleRemoveProduct = (productId) => {
    setComparedProducts(comparedProducts.filter(p => p.id !== productId));
  };

  const modalColumns = [
    { 
      title: 'Title', 
      dataIndex: 'title', 
      render: (text) => <span style={{ color: '#333', fontWeight: '500' }}>{text}</span>,
    },
    { 
      title: 'Action', 
      render: (_, record) => (
        <Button
          onClick={() => handleAddProduct(record)}
          disabled={comparedProducts.some(p => p.id === record.id)}
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
          Add
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
        Compare Products
      </h1>
      <Button 
        onClick={showModal} 
        style={{ 
          marginBottom: '30px', 
          background: '#4A90E2', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '6px', 
          padding: '8px 20px', 
          fontSize: '16px', 
          fontFamily: 'Poppins, sans-serif', 
          transition: 'all 0.3s ease', 
        }}
        onMouseEnter={(e) => (e.target.style.background = '#357ABD')}
        onMouseLeave={(e) => (e.target.style.background = '#4A90E2')}
      >
        Add More
      </Button>
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap', 
          gap: '20px', 
        }}
      >
        {comparedProducts.map(product => (
          <div 
            key={product.id} 
            style={{ 
              border: '1px solid #ececec', 
              padding: '20px', 
              background: '#fff', 
              borderRadius: '10px', 
              width: '220px', 
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)', 
              transition: 'transform 0.3s ease', 
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              style={{ 
                width: '100px', 
                borderRadius: '6px', 
                display: 'block', 
                margin: '0 auto 15px', 
              }} 
            />
            <p><strong style={{ color: '#333' }}>Title:</strong> <span style={{ color: '#555' }}>{product.title}</span></p>
            <p><strong style={{ color: '#333' }}>Price:</strong> <span style={{ color: '#2ecc71' }}>${product.price}</span></p>
            <p><strong style={{ color: '#333' }}>Brand:</strong> <span style={{ color: '#555' }}>{product.brand}</span></p>
            <p><strong style={{ color: '#333' }}>Category:</strong> <span style={{ color: '#555' }}>{product.category}</span></p>
            <Button 
              onClick={() => handleRemoveProduct(product.id)} 
              style={{ 
                background: '#e74c3c', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '6px', 
                width: '100%', 
                marginTop: '10px', 
                transition: 'background 0.3s ease', 
              }}
              onMouseEnter={(e) => (e.target.style.background = '#c0392b')}
              onMouseLeave={(e) => (e.target.style.background = '#e74c3c')}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <Modal
        title="Add Products"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        style={{ borderRadius: '10px' }}
        styles={{ 
          body: { 
            padding: '20px', 
            background: '#fff', 
          }, 
        }}
      >
        <Table
          columns={modalColumns}
          dataSource={allProducts}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden' }}
          rowHoverable={true}
        />
      </Modal>
    </div>
  );
};

export default CompareProducts;