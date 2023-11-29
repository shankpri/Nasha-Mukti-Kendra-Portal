import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
});

export const LoginForm = () => {
    const navigate = useNavigate()

        const {register, handleSubmit, formState: { errors }} = useForm({
            resolver: yupResolver(schema)
        });

    const onSubmit = async (data) => {
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            const response = await axios.post('http://localhost:8080/api/v1/user/login', data);
            console.log(response);
            if (response.status === 201){

                console.log('Authentication successful');

                axios.interceptors.request.use(config => {
                    config.headers.Authorization = `Bearer ${response.data.token}`;
                    return config;
                });

                (response.data.userRole === 'admin')? navigate('/admin/nasha'): navigate('/nasha/admin/patients')

            } else {
                console.log('Authentication failed');
                // Handle authentication failure, e.g., display an error message to the user
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle the error, e.g., display an error message to the user
        }
    };
    return (
        <>
            <div className="min-h-[70vh] bg-base-100 flex flex-col md:flex-row place-content-evenly items-center gap-8 px-8">
                <div className="card max-w-xl w-full shadow-3xl bg-base-100">
                    <div className="card-body card-bordered border-base-300 rounded-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="Email" {...register("email")} className={`input input-bordered ${errors.email ? 'input-error' : ''}`} />
                                {errors.email && <p className="label-text-alt">This field is required and should be a valid email address</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} className={`input input-bordered ${errors.password ? 'input-error' : ''}`} />
                                {errors.password && <p className="label-text-alt">This field is required</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

