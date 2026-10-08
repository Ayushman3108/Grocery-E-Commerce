import { useMemo, useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Avocado', detail: 'Hass · ripe & ready', price: 2.49, unit: 'each', category: 'Fruits', image: 'photo-1523049673857-eb18f1d7b578', badge: 'Bestseller', tint: 'mint' },
  { id: 2, name: 'Strawberries', detail: 'Sweet · locally grown', price: 4.25, unit: '250 g', category: 'Fruits', image: 'photo-1464965911861-746a04b4bca6', badge: '−15%', tint: 'pink' },
  { id: 3, name: 'Sourdough loaf', detail: 'Slow fermented · baked today', price: 5.50, unit: 'loaf', category: 'Bakery', image: 'photo-1585478259715-876acc5be8eb', badge: 'Fresh today', tint: 'sand' },
  { id: 4, name: 'Whole milk', detail: 'Grass-fed · organic', price: 3.75, unit: '1 L', category: 'Dairy', image: 'photo-1563636619-e9143da7973b', badge: '', tint: 'blue' },
  { id: 5, name: 'Cherry tomatoes', detail: 'Vine ripened · sweet', price: 3.20, unit: '300 g', category: 'Vegetables', image: 'photo-1546094096-0df4bcaaa337', badge: '', tint: 'coral' },
  { id: 6, name: 'Free range eggs', detail: 'Pasture raised · 12 pack', price: 6.95, unit: '12 pack', category: 'Dairy', image: 'photo-1518569656558-1f25e69d93d7', badge: 'Farm pick', tint: 'cream' },
  { id: 7, name: 'Baby spinach', detail: 'Washed & ready · organic', price: 3.49, unit: '120 g', category: 'Vegetables', image: 'photo-1576045057995-568f588f82fb', badge: '', tint: 'leaf' },
  { id: 8, name: 'Blueberries', detail: 'Plump · antioxidant rich', price: 5.25, unit: '125 g', category: 'Fruits', image: 'photo-1498557850523-fd3d118b962e', badge: 'Seasonal', tint: 'lavender' },
]

const categories = [
  { name: 'All', icon: '✳' }, { name: 'Fruits', icon: '🍊' }, { name: 'Vegetables', icon: '🥑' },
  { name: 'Dairy', icon: '🥛' }, { name: 'Bakery', icon: '🥖' },
]

function Icon({ name, size = 20 }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    cart: <><path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 8H6"/><circle cx="10" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    close: <><path d="m18 6-12 12M6 6l12 12"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [notice, setNotice] = useState('')

  const shown = useMemo(() => products.filter((product) =>
    (category === 'All' || product.category === category) &&
    `${product.name} ${product.detail} ${product.category}`.toLowerCase().includes(query.toLowerCase())
  ), [category, query])
  const cartItems = products.filter((product) => cart[product.id])
  const itemCount = Object.values(cart).reduce((sum, count) => sum + count, 0)
  const subtotal = cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0)

  const updateCart = (id, delta) => setCart((current) => {
    const next = { ...current, [id]: (current[id] || 0) + delta }
    if (next[id] <= 0) delete next[id]
    return next
  })

  const addToCart = (product) => {
    updateCart(product.id, 1)
    setNotice(`${product.name} added to your basket`)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-spark">✳</span> Good food, good mood. <span>Free delivery on your first order over $35</span> <a href="#products">Shop now <Icon name="arrow" size={14} /></a></div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Greenside home"><span className="brand-mark">g<span>r</span></span><span className="brand-name">greenside<span>.</span></span></a>
        <label className="search-box"><Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your fresh..." aria-label="Search products" /><kbd>⌘ K</kbd></label>
        <div className="header-actions"><button className="delivery-location" type="button"><Icon name="pin" size={18} /><span><small>Delivering to</small><strong>Brooklyn, NY <span>⌄</span></strong></span></button><button className="cart-button" type="button" onClick={() => setCartOpen(true)}><Icon name="cart" size={19} /><span>Basket</span><b>{itemCount}</b></button></div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEIGHBORHOOD MARKET</div><h1>A little more<br />goodness <em>in</em> your day.</h1><p>Farm fresh favorites and everyday essentials, brought to your door with a little extra love.</p><a className="primary-button" href="#products">Shop the market <Icon name="arrow" size={18} /></a><div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><span>+</span></div><div><strong>Loved by 12,000+ neighbors</strong><small>★★★★★ <span>4.9 out of 5</span></small></div></div></div>
          <div className="hero-art"><div className="hero-photo"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1150&q=85" alt="A colorful basket of fresh market vegetables" /></div><div className="hero-sticker"><span>GOOD FOOD</span><strong>GOOD<br />MOOD</strong><span className="sticker-sun">✳</span></div><div className="hero-note"><span>✳</span><div><strong>Picked just for you</strong><small>Fresh from our local farms</small></div></div><div className="hero-doodle">✳</div></div>
        </section>

        <section className="perks wrap" aria-label="Our promises"><div className="perk"><span className="perk-icon green">✳</span><div><strong>Always fresh</strong><small>Picked at their best</small></div></div><div className="perk"><span className="perk-icon yellow">↗</span><div><strong>At your door fast</strong><small>Same-day delivery</small></div></div><div className="perk"><span className="perk-icon peach">♡</span><div><strong>Good for everyone</strong><small>Thoughtful, local picks</small></div></div><div className="perk"><span className="perk-icon blue">⌁</span><div><strong>Plastic, less</strong><small>Better bags, always</small></div></div></section>

        <section className="shop-section wrap" id="products"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</div><h2>Fresh picks for <em>you</em></h2><p>A few things we think you'll love this week.</p></div><a className="text-link" href="#products">See everything <Icon name="arrow" size={17} /></a></div>
          <div className="category-row">{categories.map((item) => <button key={item.name} className={`category-chip ${category === item.name ? 'active' : ''}`} onClick={() => setCategory(item.name)} type="button"><span>{item.icon}</span>{item.name}</button>)}</div>
          {shown.length ? <div className="product-grid">{shown.map((product) => <article className="product-card" key={product.id}><div className={`product-image ${product.tint}`}><img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=560&q=80`} alt={product.name} loading="lazy" />{product.badge && <span className="product-badge">{product.badge}</span>}<button className={`favorite-button ${favorites.includes(product.id) ? 'favorited' : ''}`} type="button" aria-label={`${favorites.includes(product.id) ? 'Remove' : 'Add'} ${product.name} ${favorites.includes(product.id) ? 'from' : 'to'} favorites`} onClick={() => setFavorites((current) => current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id])}><Icon name="heart" size={18} /></button></div><div className="product-info"><div className="product-category">{product.category}</div><h3>{product.name}</h3><p>{product.detail}</p><div className="product-bottom"><div><strong>${product.price.toFixed(2)}</strong><span> / {product.unit}</span></div>{cart[product.id] ? <div className="quantity-control"><button type="button" aria-label={`Remove one ${product.name}`} onClick={() => updateCart(product.id, -1)}><Icon name="minus" size={15} /></button><b>{cart[product.id]}</b><button type="button" aria-label={`Add one ${product.name}`} onClick={() => updateCart(product.id, 1)}><Icon name="plus" size={15} /></button></div> : <button className="add-button" type="button" aria-label={`Add ${product.name} to basket`} onClick={() => addToCart(product)}><Icon name="plus" size={17} /></button>}</div></div></article>)}</div> : <div className="empty-results"><span>⌕</span><strong>No fresh finds just yet</strong><p>Try another search or choose a different aisle.</p><button type="button" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button></div>}
        </section>

        <section className="bottom-banner wrap"><div className="banner-icon">✳</div><div><strong>A little greener, one bag at a time.</strong><p>Bring your own bags and get $1 off your next order.</p></div><a href="#products">Learn about our promise <Icon name="arrow" size={16} /></a></section>
      </main>
      <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">g<span>r</span></span><span className="brand-name">greenside<span>.</span></span></a><p>Good food, close to home.</p><span>© 2025 Greenside Market</span></footer>

      {cartOpen && <div className="drawer-backdrop" role="presentation" onClick={() => setCartOpen(false)}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Your basket" onClick={(event) => event.stopPropagation()}><div className="drawer-header"><div><span className="eyebrow"><span className="eyebrow-line" /> YOUR GOODIES</span><h2>Your basket <span>({itemCount})</span></h2></div><button className="close-button" type="button" onClick={() => setCartOpen(false)} aria-label="Close basket"><Icon name="close" /></button></div>{cartItems.length ? <><div className="drawer-items">{cartItems.map((product) => <div className="drawer-item" key={product.id}><img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=200&q=75`} alt="" /><div className="drawer-item-info"><strong>{product.name}</strong><small>{product.unit} · ${product.price.toFixed(2)}</small><div className="quantity-control"><button type="button" onClick={() => updateCart(product.id, -1)} aria-label={`Remove one ${product.name}`}><Icon name="minus" size={14} /></button><b>{cart[product.id]}</b><button type="button" onClick={() => updateCart(product.id, 1)} aria-label={`Add one ${product.name}`}><Icon name="plus" size={14} /></button></div></div><strong className="line-price">${(product.price * cart[product.id]).toFixed(2)}</strong></div>)}</div><div className="delivery-progress"><span>✳</span><div><strong>{subtotal >= 35 ? "You've unlocked free delivery!" : `$${Math.max(0, 35 - subtotal).toFixed(2)} away from free delivery`}</strong><div className="progress-track"><span style={{ width: `${Math.min(100, subtotal / 35 * 100)}%` }} /></div></div></div><div className="drawer-total"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><button className="checkout-button" type="button" onClick={() => { setNotice('Checkout is ready for your next step'); setCartOpen(false); window.setTimeout(() => setNotice(''), 2600) }}>Continue to checkout <Icon name="arrow" size={18} /></button><p className="checkout-note">Taxes and delivery calculated at checkout</p></> : <div className="empty-cart"><span>🧺</span><h3>Your basket is taking a little nap.</h3><p>Add a few fresh favorites and we'll bring them right over.</p><button className="primary-button" type="button" onClick={() => setCartOpen(false)}>Find something good <Icon name="arrow" size={17} /></button></div>}</aside></div>}
      {notice && <div className="toast"><span>✓</span>{notice}</div>}
    </div>
  )
}

export default App
