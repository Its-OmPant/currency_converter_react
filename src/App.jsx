import InputBox from "./components/InputBox";
function App() {
	return (
		<>
			<div className="w-screen h-[40vh] bg-sky-950 overflow-hidden">
				<h1 className="py-6 select-none text-5xl font-kodeMono uppercase tracking-wider text-center text-gray-200 opacity-25  sm:text-6xl">
					Currency Converter
				</h1>
			</div>
			<div className="w-screen h-[60vh] bg-white relative">
				<div className="w-[90%] bg-gray-200 rounded-md shadow-md p-4 absolute -top-1/4 flex flex-col items-center left-1/2 -translate-x-[50%]  sm:w-[70%]  sm:left-1/2  sm:-translate-x-[50%] lg:w-[50%]">
					<InputBox label="From" />
					<InputBox label="To" />
					<button className="bg-sky-800 px-6 py-2 m-4 rounded-md shadow-md text-white text-lg text-bold">
						Convert
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
