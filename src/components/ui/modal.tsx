import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={cn(
        "relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 mx-4 max-w-md w-full animate-in fade-in-0 zoom-in-95 duration-300",
        className
      )}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <X className="size-5 text-white" />
        </button>
        
        {children}
      </div>
    </div>
  )
}

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center pt-2">
        <div className="mb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Thank You!
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Thank you for sending us your message. We will contact you shortly to discuss your project.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          Close
        </button>
      </div>
    </Modal>
  )
}
