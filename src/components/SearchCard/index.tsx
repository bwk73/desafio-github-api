import "./styles.css";
import SearchButton from "../SearchButton";
import { useEffect, useState } from "react";
import { InformationDTO } from "../../models/data";
import axios from "axios";

type FormData = {
  loginName: string;
};

export default function SearchCard() {

  const [formData, setFormData] = useState<FormData>({
    loginName: "",
  });

  const [information, setInformation] = useState<InformationDTO>({
    profileImg: "",
    githubUrl: "",
    followers: 0,
    location: "",
    name: "",
  });

  const [status, setStatus] = useState({
    displayResult: false,
    nothingHere: false
  });

  const [press, setPress] = useState(0);
 
  useEffect(() => {
    if(formData.loginName != '')
    axios.get("https://api.github.com/users/" + formData.loginName)
      .then((response) => {
        console.log(response.data);
        setStatus({...status, nothingHere: false})
        setInformation({
          profileImg: response.data.avatar_url,
          githubUrl: response.data.url,
          followers: Number(response.data.followers),
          location: response.data.location,
          name: response.data.name,
        });
      }).catch(() => setStatus({...status, nothingHere: true}));
  }, [press]);

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setPress(press + 1);
    formData.loginName === ''
    ? setStatus({...status, displayResult:false})
    : setStatus({...status, displayResult: true})
  };

  function getInformationDTO(userProfile: string): Promise<any> {

    return axios.get("https://api.github.com/users/" + userProfile);
  };

  return (
    <div className="sc-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Encontre um perfil Github</h2>
        <input
          name="loginName"
          value={formData.loginName}
          type="text"
          placeholder="Usuário Github"
          onChange={handleInputChange}
        />
        <div>
          <SearchButton />
        </div>
      </form>
    </div>
  );
}
