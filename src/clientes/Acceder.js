import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:3001";

const Acceder = () => {
    const [datos, setDatos] = useState(null);
    useEffect(() => {
        axios.get(baseURL + "/api/enums").then((response) => {
            setDatos(response.data);
            console.log(datos)
        });
    }, []);

    return (
        <div className="container">
            <div>{datos.map(dato => (
                <li>
                    {dato}
                </li>
            ))}</div>
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>


                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </div>
    );
}

export default Acceder;