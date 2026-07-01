// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'))
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
    item.classList.add('active')
    document.getElementById(`page-${item.dataset.page}`).classList.add('active')
  })
})

// Title bar double-click maximize
document.getElementById('drag-area').addEventListener('dblclick', () => {
  window.electronAPI.maximize()
})

// System stats simulation
function updateStats() {
  const cpu = Math.floor(Math.random() * 40) + 5
  const ram = Math.floor(Math.random() * 30) + 30
  const gpu = Math.floor(Math.random() * 30) + 10
  const disk = Math.floor(Math.random() * 20) + 35

  document.getElementById('cpu-value').textContent = `${cpu}%`
  document.getElementById('ram-value').textContent = `${ram}%`
  document.getElementById('gpu-value').textContent = `${gpu}%`
  document.getElementById('disk-value').textContent = `${disk}%`

  document.getElementById('cpu-bar').style.width = `${cpu}%`
  document.getElementById('ram-bar').style.width = `${ram}%`
  document.getElementById('gpu-bar').style.width = `${gpu}%`
  document.getElementById('disk-bar').style.width = `${disk}%`
}

updateStats()
setInterval(updateStats, 3000)

// Cleaner
let cleaning = false

function startClean() {
  if (cleaning) return
  cleaning = true

  const container = document.getElementById('progress-container')
  const fill = document.getElementById('progress-fill')
  const text = document.getElementById('progress-text')
  const results = document.getElementById('results-container')

  container.style.display = 'flex'
  results.style.display = 'none'

  let progress = 0
  const interval = setInterval(() => {
    progress += 1
    fill.style.width = `${progress}%`
    text.textContent = `${progress}%`

    if (progress >= 100) {
      clearInterval(interval)
      cleaning = false
      results.style.display = 'block'
      results.innerHTML = `
        <strong>✅ Scan Complete!</strong><br>
        Found 34,308 files totaling 5.4 GB<br>
        <button class="primary-btn" style="margin-top:12px" onclick="cleanNow()">Clean Now</button>
      `
    }
  }, 40)
}

function cleanNow() {
  const fill = document.getElementById('progress-fill')
  const text = document.getElementById('progress-text')
  const results = document.getElementById('results-container')

  let progress = 0
  const interval = setInterval(() => {
    progress += 1
    fill.style.width = `${progress}%`
    text.textContent = `${progress}%`

    if (progress >= 100) {
      clearInterval(interval)
      results.innerHTML = `
        <strong>✅ Cleaned Successfully!</strong><br>
        Freed up 5.4 GB of space
      `
    }
  }, 30)
}

// Game Mode toggle
function toggleGameMode() {
  const el = document.getElementById('game-mode-switch')
  el.classList.toggle('active')
}

// Esports toggle
function toggleEsports() {
  const el = document.getElementById('esports-switch')
  el.classList.toggle('active')
}

// Emulator selection
function selectEmulator(name) {
  document.querySelectorAll('.emulator-btn').forEach(b => b.classList.remove('active'))
  event.currentTarget.classList.add('active')
}

// Settings toggles
document.querySelectorAll('.setting-item .toggle-switch').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
  })
})

// Quick clean from tray
window.electronAPI.onQuickClean(() => {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'))
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
  document.querySelector('[data-page="cleaner"]').classList.add('active')
  document.getElementById('page-cleaner').classList.add('active')
  startClean()
})
