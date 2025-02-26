import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  title, 
  children, 
  className = '',
  variant = 'elevated',
  loading = false,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden
        ${styles.card}
        ${styles[variant]}
        ${loading ? styles.loading : ''}
        ${className}
      `}
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default Card;