import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDetails from './components/ProductDetails';
import CompareProducts from './components/CompareProducts';

function App() {
  return (
    <Router>
      <div 
        style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Navbar />
        <div 
          style={{ 
            display: 'flex', 
            maxWidth: '1400px',
            margin: '0 auto',
            paddingTop: '20px',
          }}
        >
          <Sidebar />
          <div 
            style={{ 
              flex: 1, 
              padding: '20px',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
              marginLeft: '20px',
              minHeight: 'calc(100vh - 110px)',
            }}
          >
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/home" element={
                <div 
                  style={{ 
                    textAlign: 'center', 
                    fontSize: '24px', 
                    color: '#2c3e50', 
                    padding: '50px 0', 
                  }}
                >
                  Welcome to the Home Page
                </div>
              } />
              <Route path="/products" element={<ProductDetails />} />
              <Route path="/compare" element={<CompareProducts />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;