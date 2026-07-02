export default function Logo3D({ size = 40, className = '' }) {

  return (
    <div className={`logo-3d-container ${className}`} style={{ width: size, height: size }}>
      <div className="logo-3d">
        <div className="logo-3d-glow" />
        <div className="logo-3d-ring" />
        <div className="logo-3d-ring" />
        <div className="logo-3d-ring" />
        <div
          className="logo-3d-inner"
          style={{ width: size, height: size }}
        >
          <img
            src="/logo.svg"
            alt="BaTo0oT Cleaner"
            style={{ width: '60%', height: '60%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
