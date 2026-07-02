export default function Logo3D({ size = 40, className = '' }) {
  const fontSize = Math.round(size * 0.5)

  return (
    <div className={`logo-3d-container ${className}`} style={{ width: size, height: size }}>
      <div className="logo-3d">
        <div className="logo-3d-glow" />
        <div className="logo-3d-ring" />
        <div className="logo-3d-ring" />
        <div className="logo-3d-ring" />
        <div
          className="logo-3d-inner"
          style={{ width: size, height: size, fontSize }}
        >
          B
        </div>
      </div>
    </div>
  )
}
