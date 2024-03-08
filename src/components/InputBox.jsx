function InputBox({ label }) {
	return (
		<div
			id="InputBox"
			className="w-4/5 p-2 my-2 flex flex-col  gap-4 flex-wrap md:flex-row md:gap-2 md:p-4">
			<label
				htmlFor=""
				className="w-1/5 font-sans text-lg md:w-[20%] sm:text-xl  lg:w-[15%]">
				{label}
			</label>
			<div className="bg-white w-full rounded-md overflow-hidden flex justify-between text-md md:w-[70%] md:p-3 lg-p-4">
				<input
					type="number"
					min={0}
					className=" w-[75%] h-full rounded-md outline-none p-2"
				/>
				<select
					name=""
					id=""
					className=" bg-sky-100 px-2 text-sky-900 outline-none md:rounded-md">
					<option value="">USD</option>
					<option value="">INR</option>
					<option value="">RBL</option>
					<option value="">PPT</option>
					<option value="">BTC</option>
				</select>
			</div>
		</div>
	);
}

export default InputBox;
