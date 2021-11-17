import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../actions/categoryActions';
import {createProduct} from '../../actions/productActions';

const Modal = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);

    const [productData, setProductData] = useState({
		photo: null,
		name: '',
		description: '',
		price: '',
		category: '',
		quantity: '',
	});

    const {
		photo,
		name,
		description,
		price,
		category,
		quantity,
	} = productData;

    const handleProductChange = evt => {
		setProductData({
			...productData,
			[evt.target.name]: evt.target.value,
		});
	};
    const handlephoto = evt => {
		console.log(evt.target.files[0]);
		setProductData({
			...productData,
			[evt.target.name]: evt.target.files[0],
		});
	};

    const handleProductSubmit = e => {
		e.preventDefault();

	 {
			let formData = new FormData();

			formData.append('photo', photo);
			formData.append('name', name);
			formData.append('quantity', quantity);
			formData.append('price', price);
			formData.append('category', category);
			formData.append('description', description);

			dispatch(createProduct(formData));

            console.log(...formData);
			setProductData({
				photo: null,
				name: '',
				description: '',
				price: '',
				category: '',
				quantity: '',
			});
		}
	};

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])



    return (

        <div className="fixed z-10 inset-0">
            <div className="flex items-end justify-center my-32 pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"
                        onClick={() => setShowModal(false)}></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div className="p-12 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden  transform transition-all
                w-1/3">
                                
                    <form onSubmit={handleProductSubmit}>
                        <div className="md:space-y-2 mb-3">
                   

                            <label className="text-xs font-semibold text-gray-600 py-2">Product Photo<abbr className="hidden" title="required">*</abbr></label>
                            <div className="flex items-center py-6">
                                <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                    <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload" />
                                </div>
                                <label className="cursor-pointer ">
                                    <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 
                                                hover:bg-green-500 hover:shadow-lg">Picture</span>
                                    <input type="file" className="hidden" 
                                    // accept="image/*"
                                    name='photo'
                               
                                  
                                    onChange={handlephoto}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                            <div className="mb-3 space-y-2 w-full text-xs">
                                <label className="font-semibold text-gray-600 py-2">Product Name <abbr title="required">*</abbr></label>
                                <input placeholder="Product Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border 
                                border-grey-lighter rounded-lg h-10 px-4 focus:outline-none" type="text"
                                name='name'
                                value={name}
                                onChange={handleProductChange}
                                />

                            </div>
                            <div className="mb-3 space-y-2 w-full text-xs">
                                <label className="font-semibold text-gray-600 py-2">Product Quantity <abbr title="required">*</abbr></label>
                                <input placeholder="Quantity" className="appearance-none block w-full bg-grey-lighter 
                                            text-grey-darker border
                                 border-grey-lighter rounded-lg h-10 px-4 focus:outline-none" type="number"
                                    name='quantity'
												value={quantity}
												onChange={handleProductChange}
                                />

                            </div>
                        </div>

                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                            <div className="w-full flex flex-col mb-3">
                                <label className="font-semibold text-gray-600 py-2">Product Price</label>
                                <input placeholder="Price" className="appearance-none block w-full bg-grey-lighter 
                                            text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 focus:outline-none"
                                            name='price'
											value={price}
											onChange={handleProductChange}
                                    type="number" />
                            </div>
                            <div className="w-full flex flex-col mb-3">
                                <label className="font-semibold text-gray-600 py-2">Categories<abbr title="required">*</abbr></label>
                                <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter 
                                            rounded-lg h-10 px-4 md:w-full focus:outline-none"
                                            name='category'
                                            onChange={handleProductChange}
                                >

                                    <option value="0">Select a category</option>
                                    {categories && categories.map((category, i) => (
                                        <option key={i} value={category.name}>{category._id}</option>
                                    ))}


                                </select>
                                <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                            </div>
                        </div>
                        <div className="flex-auto w-full mb-1 text-xs space-y-2">
                            <label className="font-semibold text-gray-600 py-2">Description</label>
                            <textarea required="" name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 
                                        appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg 
                                         py-4 px-4 focus:outline-none"
                                         name='description'
                                         value={description}
                                         onChange={handleProductChange}
                                placeholder="Enter your product info" spellCheck="false"></textarea>
                        </div>

                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider
                                         border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 focus:outline-none"
                                // onClick={() => setShowModal(false)}
                            > Cancel

                            </button>
                            <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider 
                                        text-white rounded-full hover:shadow-lg hover:bg-green-500 focus:outline-none"
                                      type='submit'
                                // onClick={() => setShowModal(false)}
                            >Save</button>


                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Modal
