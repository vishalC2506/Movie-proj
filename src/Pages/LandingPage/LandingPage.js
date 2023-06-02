import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../Redux/counterSlice";
const LandingPage = ({ fetchdData }) => {
  const count = useSelector((state) => state.counter.countr);
  const dispatch = useDispatch();
  const imageSrc = fetchdData ? fetchdData.data[count].show.image.medium : "";
  const handleNextInfo = () => {
    if (count < 9) {
      dispatch(counterActions.nextInfo());
    } else {
      dispatch(counterActions.resetInfo());
    }
  };

  let Datas = fetchdData ? fetchdData.data[count].show : "";
  return (
    <div className="w-screen bg-red-200 h-screen b flex justify-center align-middle flex-col ">
      {
        <Image
          src={imageSrc}
          roundedCircle
          className="w-44 h-44 shadow-xl shadow-black mt-4 m-auto  "
        />
      }
      {fetchdData
        ? fetchdData.data.map((val, ind) => {
            console.log(val);
          })
        : ""}
      <div className="w-1/2 h-1/6 m-auto mt-4  ">
        <Table striped bordered hover variant="dark" className="">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Type</th>
              <th>premiered</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{Datas.name}</td>
              <td>{Datas.type}</td>
              <td>{Datas.premiered}</td>
              <td>{Datas.language}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="w-1/2 h-1/4  m-auto flex justify-around  mb-16 pt-0">
        <Link to="/Summary" className="no-underline text-black">
          {" "}
          <button
            className={`w-32 h-12 border-2 border-black rounded-md
       bg-slate-400 text-lg font-bold 
       shadow-inner  transition  ease-in-out
      delay-150 hover:shadow-black hover:text-slate-200`}
          >
            summary
          </button>
        </Link>

        <button
          className={`w-32 h-12 border-2 border-black rounded-md
          bg-slate-400 text-lg font-bold 
          shadow-inner  transition  ease-in
         delay-150 hover:shadow-black hover:text-slate-200`}
          onClick={handleNextInfo}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
