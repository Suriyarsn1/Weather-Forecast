const Home = (props) => {
    return (
        <> <div style={{ backgroundImage: `url(${props.images})`, backgroundRepeat: "no-repeat", backgroundSize: "cover ", height: "100vh" }}><div className="flex justify-center  " >
            <div className="w-[50%]  py-5 bg-transparent shadow-2xl flex flex-col  items-center mt-[10%] border rounded-2xl gap-5 ">
                <h1 className="text-xl font-bold border border-dotted rounded-md border-black p-2 sm:text-2xl  text-amber-100 md:text-3xl lg:text-5xl ">Weather Repoter</h1>
                <div className="shadow-xl mt-1 w-[60%] flex justify-center ">
                    <input
                        type="text" placeholder="Enter city name..." className=" w-full border border-black outline-none font-bold text-sm md:text-xl lg:text-2xl p-1 rounded-lg bg-transparent md:p-2 font- lg:p-3" onChange={props.getinput} />
                </div>
                <div>
                    <button className="bg-blue-300 text-center font-semibold px-6 py-1 rounded-md md:text-2xl  lg:text-3xl" onClick={props.handlevalue}>Submit</button>
                </div>
                <div>
                    <div className="grid text-center bg-transparent shadow-2xl border border-black p-2 m-2 h-[6rem] rounded-md ">
                        <h1 className="text-center  font-semibold text-xl  md:text-2xl lg:text-3xl">Location</h1>
                        <h1 className="text-center  font-semibold text-xl md:text-2xl lg:text-3xl">{props.place}</h1>
                    </div>
                    <div className="grid grid-cols-2 mt-10 ">
                        <div className="  bg-transparent shadow-2xl p-1 m-1 border border-black h-[6rem] rounded-md">
                            <h1 className="text-center  font-semibold text-xl  text-amber-100 md:text-2xl lg:text-3xl">Humidity</h1>
                            <h1 className="text-center font-semibold text-xl  text-amber-100 md:text-2xl lg:text-3xl">{props.humidity}</h1>
                        </div>
                        <div className="  bg-transparent shadow-2xl p-1 m-1 border border-black h-[6rem]  rounded-md ">
                            <h1 className="  text-center  font-semibold text-xl text-amber-100 md:text-2xl lg:text-3xl">Temprature</h1>
                            <h1 className=" text-center  font-semibold text-xl  text-amber-100 md:text-2xl lg:text-3xl">{props.temp}{props.emogis}</h1>
                        </div>
                    </div>
                    <div className=" text-center  bg-transparent  p-1 m- rounded-md border border-black h-[6rem] shadow-2xl">
                        <h1 className=" font-semibold text-xl  text-amber-100 md:text-2xl lg:text-3xl">Wind</h1>
                        <h1 className=" font-semibold text-xl  text-amber-100 md:text-2xl lg:text-3xl">{props.wind}</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Home