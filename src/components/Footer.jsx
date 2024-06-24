import { footerData } from "../utils/footerData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Footer = () => {
  return (
    <footer className="mt-16 md:w-full text-xs text-gray-500">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center flex-wrap gap-y-1">
          {footerData.map((item) => (
            <span
              key={item.id}
              className="text-gray-500 mx-2 hover:cursor-pointer hover:underline"
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="group hover:cursor-pointer">
            English{" "}
            <span>
              <KeyboardArrowDownIcon sx={{ width: "18px" }} />
            </span>
          </p>
          <p>
            <span>
              <CopyrightIcon sx={{ width: "13px" }} />
            </span>{" "}
            2024 Instagram from Meta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
