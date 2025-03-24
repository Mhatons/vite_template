import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { increment, decrement } from './store/counterSlice'
import { startLoading, stopLoading } from './store/loadingSlice'
import './App.css'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const { isLoading, loadingMessage } = useSelector((state: RootState) => state.loading)
  const dispatch = useDispatch()

  const handleIncrement = async () => {
    dispatch(startLoading('Incrementing...'))
    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 1000))
    dispatch(increment())
    dispatch(stopLoading())
  }

  const handleDecrement = async () => {
    dispatch(startLoading('Decrementing...'))
    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 1000))
    dispatch(decrement())
    dispatch(stopLoading())
  }

  return (
    <div className="bg-[#ddd] py-4 text-center">
      <h1 className="text-2xl font-bold capitalize mb-4">
        Redux Toolkit Counter Example
      </h1>
      {isLoading && (
        <div className="text-blue-600 mb-4">
          {loadingMessage}
        </div>
      )}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={isLoading}
        >
          Decrement
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          disabled={isLoading}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
