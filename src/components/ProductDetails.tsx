import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../utils';

type PorductDeatilsProps = {
    product: Product
}

export default function ProductDetails({ product }: PorductDeatilsProps) {

    const navigate = useNavigate();

    const isAvailable = product.availability;

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">

                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">

                {isAvailable ? 'Disponible' : 'No Dispobible' }
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className='flex gap-2 items-center'>
                    <button onClick={() => navigate(`/productos/${product.id}/editar`)} 
                    className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:bg-indigo-800' >Editar</button>
                </div>

            </td>
        </tr>
    )
}
