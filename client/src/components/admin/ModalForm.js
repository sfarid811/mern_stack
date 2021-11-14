import React , {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCategories} from '../../actions/categoryActions';

const ModalForm = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(null);

  
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    const SubmitData = (e) => {
        e.preventDefault();
        localStorage.setItem('data', name);
    }
 
    return (
        <div>
            <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat relative items-center">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                    <div className="grid  gap-8 grid-cols-1">
                        <div className="flex flex-col ">
                            <div className="flex flex-col sm:flex-row items-center">
                                <h2 className="font-semibold text-lg mr-auto">Shop Info</h2>
                                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                            </div>
                            <div className="mt-5">
                                <form className="form">
                                    <div className="md:space-y-2 mb-3">
                                        <label className="text-xs font-semibold text-gray-600 py-2">Product Photo<abbr className="hidden" title="required">*</abbr></label>
                                        <div className="flex items-center py-6">
                                            <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload" />
                                            </div>
                                            <label className="cursor-pointer ">
                                                <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 
                                                hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                <input type="file" className="hidden"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Product Name <abbr title="required">*</abbr></label>
                                            <input placeholder="Product Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border 
                                border-grey-lighter rounded-lg h-10 px-4 focus:outline-none" type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value) }
                                />
                                         
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Product Quantity <abbr title="required">*</abbr></label>
                                            <input placeholder="Quantity" className="appearance-none block w-full bg-grey-lighter 
                                            text-grey-darker border
                                 border-grey-lighter rounded-lg h-10 px-4 focus:outline-none" type="number"
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}/>
                            
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                        </div>
                                    </div>
                                
                                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Product Price</label>
                                            <input placeholder="Price" className="appearance-none block w-full bg-grey-lighter 
                                            text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 focus:outline-none" 
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value) }
                                            type="number" />
                                        </div>
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Categories<abbr title="required">*</abbr></label>
                                            <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter 
                                            rounded-lg h-10 px-4 md:w-full focus:outline-none" 
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                          >
                                                <option value="0">Select a category</option>
                                    { categories && categories.map((category, i) => (
                                        <option key={i} value={category.name}>{category.name}</option>
                                    )) }

                                            </select>
                                            <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                        </div>
                                    </div>
                                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                        <label className="font-semibold text-gray-600 py-2">Description</label>
                                        <textarea required="" name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 
                                        appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg 
                                         py-4 px-4 focus:outline-none" value={description} 
                                         onChange={(e) => setDescription(e.target.value) }
                                         placeholder="Enter your product info" spellCheck="false"></textarea>
                                    </div>

                                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider
                                         border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 focus:outline-none"> Cancel </button>
                                        <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider 
                                        text-white rounded-full hover:shadow-lg hover:bg-green-500 focus:outline-none"
                                        type="submit"
                                        onSubmit={SubmitData}>Save</button>
                                    </div>
                                </form>
                                {/* {JSON.stringify(name)}
                                {JSON.stringify(price)}
                                {JSON.stringify(quantity)}
                                {JSON.stringify(description)}
                                {JSON.stringify(category)} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm;
