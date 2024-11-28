import Header from "./components/header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
