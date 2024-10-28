import React from 'react';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Alert = ({ 
  variant = "default", 
  title, 
  message, 
  isOpen, 
  onClose,
  className
}) => {
  // Early return if alert is not open
  if (!isOpen) return null;

  // Define variant-specific properties
  const variants = {
    success: {
      containerStyles: "bg-green-50 border-green-200",
      iconStyles: "text-green-400",
      titleStyles: "text-green-800",
      messageStyles: "text-green-700",
      closeButtonStyles: "text-green-400 hover:bg-green-100",
      Icon: CheckCircle2
    },
    error: {
      containerStyles: "bg-red-50 border-red-200",
      iconStyles: "text-red-400",
      titleStyles: "text-red-800",
      messageStyles: "text-red-700",
      closeButtonStyles: "text-red-400 hover:bg-red-100",
      Icon: XCircle
    },
    warning: {
      containerStyles: "bg-yellow-50 border-yellow-200",
      iconStyles: "text-yellow-400",
      titleStyles: "text-yellow-800",
      messageStyles: "text-yellow-700",
      closeButtonStyles: "text-yellow-400 hover:bg-yellow-100",
      Icon: AlertCircle
    },
    info: {
      containerStyles: "bg-blue-50 border-blue-200",
      iconStyles: "text-blue-400",
      titleStyles: "text-blue-800",
      messageStyles: "text-blue-700",
      closeButtonStyles: "text-blue-400 hover:bg-blue-100",
      Icon: Info
    },
    default: {
      containerStyles: "bg-gray-50 border-gray-200",
      iconStyles: "text-gray-400",
      titleStyles: "text-gray-800",
      messageStyles: "text-gray-700",
      closeButtonStyles: "text-gray-400 hover:bg-gray-100",
      Icon: Info
    }
  };

  // Get styles for current variant
  const currentVariant = variants[variant] || variants.default;
  const { 
    containerStyles, 
    iconStyles, 
    titleStyles, 
    messageStyles, 
    closeButtonStyles, 
    Icon 
  } = currentVariant;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 w-96 rounded-lg border p-4 shadow-lg transition-all duration-300",
        containerStyles,
        className
      )}
      role="alert"
    >
      <div className="flex items-start space-x-3">
        {/* Alert Icon */}
        <div className={cn("flex-shrink-0", iconStyles)}>
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          {title && (
            <h3 className={cn("font-medium mb-1", titleStyles)}>
              {title}
            </h3>
          )}
          
          {/* Message */}
          {message && (
            <p className={cn("text-sm", messageStyles)}>
              {message}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          className={cn(
            "rounded-lg p-1.5 inline-flex items-center justify-center transition-colors",
            closeButtonStyles
          )}
          onClick={onClose}
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Alert;

// Example usage:
const ExampleUsage = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (variant, title, message) => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, variant, title, message }]);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissAlert(id);
    }, 5000);
  };

  const dismissAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <div>
      {/* Example buttons to trigger different alerts */}
      <div className="space-x-4">
        <button
          onClick={() => showAlert(
            'success',
            'Success!',
            'Your account has been created successfully.'
          )}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Show Success
        </button>

        <button
          onClick={() => showAlert(
            'error',
            'Error!',
            'There was a problem creating your account.'
          )}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Show Error
        </button>

        <button
          onClick={() => showAlert(
            'warning',
            'Warning!',
            'Please verify your email address.'
          )}
          className="px-4 py-2 bg-yellow-600 text-white rounded"
        >
          Show Warning
        </button>

        <button
          onClick={() => showAlert(
            'info',
            'Info',
            'Check your email for verification instructions.'
          )}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Show Info
        </button>
      </div>

      {/* Render all active alerts */}
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          variant={alert.variant}
          title={alert.title}
          message={alert.message}
          isOpen={true}
          onClose={() => dismissAlert(alert.id)}
        />
      ))}
    </div>
  );
};
