import React, { useState } from 'react';
import { 
  BarChart2, 
  Package, 
  Cloud, 
  TrendingUp, 
  RefreshCw, 
  Shield, 
  FileText, 
  Database,
  Layers,
  CheckCircle,
  Search
} from 'lucide-react';

const InventoryExplainer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      id: 'tracking',
      icon: Package,
      title: 'Real-Time Inventory Tracking',
      description: 'Advanced barcode and RFID technology provides up-to-the-minute accuracy on stock levels through a centralized, cloud-based system.',
      details: [
        'Barcode & RFID Scanning',
        'Cloud-Based Tracking System',
        'Real-time Stock Updates',
        'Warehouse Location Tracking'
      ]
    },
    {
      id: 'optimization',
      icon: TrendingUp,
      title: 'Stock Level Optimization',
      description: 'Use historical data and advanced analytics to predict future demand and adjust inventory levels automatically.',
      details: [
        'Demand Forecasting',
        'Automated Replenishment',
        'Safety Stock Management',
        'Order Point Optimization'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart2,
      title: 'Detailed Reporting & Analytics',
      description: 'Generate comprehensive reports on stock turnover, aging inventory, and accuracy while monitoring key performance indicators.',
      details: [
        'Inventory Reports',
        'KPI Monitoring',
        'Customizable Dashboards',
        'Performance Metrics'
      ]
    },
    {
      id: 'integration',
      icon: RefreshCw,
      title: 'System Integration',
      description: 'Seamlessly integrate with ERP and WMS systems to ensure synchronized inventory data across all platforms.',
      details: [
        'ERP & WMS Integration',
        'Multi-Channel Support',
        'API Connectivity',
        'Real-time Synchronization'
      ]
    },
    {
      id: 'accuracy',
      icon: CheckCircle,
      title: 'Inventory Accuracy',
      description: 'Maintain precise inventory records through regular cycle counting and reconciliation processes.',
      details: [
        'Cycle Counting',
        'Inventory Reconciliation',
        'Discrepancy Resolution',
        'Audit Support'
      ]
    },
    {
      id: 'scalable',
      icon: Layers,
      title: 'Scalable Solutions',
      description: 'Adaptable inventory management processes that grow with your business needs.',
      details: [
        'Customizable to Business Size',
        'Flexible Inventory Models',
        'Growth Support',
        'Multiple Location Management'
      ]
    }
  ];

  const styles = {
    container: {
      backgroundColor: '#0A192F',
      color: 'white',
      padding: '24px',
      borderRadius: '8px',
      maxWidth: '1024px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: '#1E2A3B',
      borderRadius: '8px',
      padding: '24px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    cardActive: {
      border: '2px solid #00B4D8'
    },
    icon: {
      color: '#00B4D8'
    },
    description: {
      color: '#94A3B8'
    },
    accent: {
      color: '#00B4D8'
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '16px' }}>
          3PL Inventory Management
        </h2>
        <p style={{ color: '#94A3B8', maxWidth: '42rem', margin: '0 auto' }}>
          Comprehensive inventory management solutions for real-time tracking, 
          optimization, and reporting to streamline your logistics operations.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {features.map((feature) => (
          <div
            key={feature.id}
            style={{
              ...styles.card,
              ...(activeSection === feature.id ? styles.cardActive : {})
            }}
            onClick={() => {
              setActiveSection(activeSection === feature.id ? null : feature.id);
              setIsExpanded(true);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <feature.icon 
                style={{
                  ...styles.icon,
                  width: '32px',
                  height: '32px',
                  transform: activeSection === feature.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              />
              <h3 style={{ fontWeight: '600' }}>{feature.title}</h3>
            </div>

            <p style={styles.description}>{feature.description}</p>

            <div style={{
              maxHeight: activeSection === feature.id ? '200px' : '0',
              opacity: activeSection === feature.id ? '1' : '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              marginTop: '16px'
            }}>
              {feature.details.map((detail, index) => (
                <div
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '8px',
                    color: '#94A3B8',
                    fontSize: '0.875rem'
                  }}
                >
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#00B4D8' 
                  }} />
                  {detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a 
          href="mailto:Vatche@Queticollc.com" 
          style={{
            ...styles.accent,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1.125rem',
            textDecoration: 'none'
          }}
        >
          <Search size={20} />
          Learn more about our inventory solutions
        </a>
      </div>

      <div style={{
        ...styles.card,
        marginTop: '48px'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px' }}>
          Success Story
        </h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ 
            backgroundColor: '#00B4D8', 
            borderRadius: '8px', 
            padding: '12px' 
          }}>
            <TrendingUp style={{ width: '24px', height: '24px', color: 'white' }} />
          </div>
          <div>
            <p style={styles.description}>
              A consumer electronics retailer achieved a 35% reduction in stockouts and 
              20% improvement in inventory turnover after implementing our solution.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginTop: '16px' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ ...styles.accent, fontSize: '1.5rem', fontWeight: 'bold' }}>
                  35%
                </div>
                <div style={{ color: '#64748B', fontSize: '0.875rem' }}>
                  Fewer Stockouts
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ ...styles.accent, fontSize: '1.5rem', fontWeight: 'bold' }}>
                  20%
                </div>
                <div style={{ color: '#64748B', fontSize: '0.875rem' }}>
                  Better Turnover
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryExplainer;
