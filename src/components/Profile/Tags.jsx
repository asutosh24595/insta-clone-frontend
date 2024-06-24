import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <div className="w-full h-auto flex items-center pl-0.5 gap-0.5 flex-wrap">
      <Link
        to="/profile"
        className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh]
            sm:h-[30vh] h-[25vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Link>
      <Link
        to="/profile"
        className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh]
            sm:h-[30vh] h-[25vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1555489020-a98a84149129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhZGRsaW5nfGVufDB8fDB8fHww")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Link>
      <Link
        to="/profile"
        className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh]
            sm:h-[30vh] h-[25vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1476994230281-1448088947db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Link>
      <Link
        to="/profile"
        className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh]
            sm:h-[30vh] h-[25vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1565992441121-4367c2967103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpaW5nfGVufDB8fDB8fHww")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Link>
    </div>
  );
};

export default Tags;
