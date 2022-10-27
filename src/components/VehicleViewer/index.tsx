import { iListVehicle } from "../../interfaces/vehicle_view.interface";
import { ListVehicle } from "../ListVehicle";

export function VehicleViewer({ list }: iListVehicle) {
  const moto_list = list.filter((e) => e.type === "moto");
  const car_list = list.filter((e) => e.type === "carro");
  return (
    <div>
      {moto_list.length > 0 && <ListVehicle list={moto_list} type="Moto" />}
      {car_list.length > 0 && <ListVehicle list={car_list} type="Carro" />}
    </div>
  );
}
