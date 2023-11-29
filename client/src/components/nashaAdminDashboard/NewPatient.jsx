import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    age: yup.number().required('Age is required').positive('Age must be a positive number'),
    gender: yup.string().required('Gender is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    address: yup.string().required('Address is required'),
    remark: yup.string(),
    activityStatus: yup.string().required('Activity Status is required'),
});

export const NewPatient = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = async (data) => {
        try {

            const response = await axios.post('http://localhost:8080/api/v1/user/new-patient', data)
            // Handle the response from the backend here, e.g., show a success message or redirect the user
            console.log('Data sent to the server:', response.data);
        }
        // You can redirect the user to another page or display a success message here
        catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error sending data:', error);
        }
    };

    return (
        <div className="min-h-[70vh] bg-base-100 flex flex-col md:flex-row place-content-evenly items-center gap-8 px-8">
            <div className="card max-w-xl w-full shadow-3xl bg-base-100">
                <div className="card-body card-bordered border-base-300 rounded-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Name"
                                        className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.name && <span className="error-text">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Age</span>
                            </label>
                            <Controller
                                name="age"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="number"
                                        placeholder="Age"
                                        className={`input input-bordered ${errors.age ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.age && <span className="error-text">{errors.age.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Gender</span>
                            </label>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Gender"
                                        className={`input input-bordered ${errors.gender ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.gender && <span className="error-text">{errors.gender.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">City</span>
                            </label>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="City"
                                        className={`input input-bordered ${errors.city ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.city && <span className="error-text">{errors.city.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">State</span>
                            </label>
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="State"
                                        className={`input input-bordered ${errors.state ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.state && <span className="error-text">{errors.state.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Address</span>
                            </label>
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Address"
                                        className={`input input-bordered ${errors.address ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.address && <span className="error-text">{errors.address.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Remark</span>
                            </label>
                            <Controller
                                name="remark"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Remark"
                                        className={`input input-bordered ${errors.remark ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.remark && <span className="error-text">{errors.remark.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Activity Status</span>
                            </label>
                            <Controller
                                name="activityStatus"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Activity Status"
                                        className={`input input-bordered ${errors.activityStatus ? 'input-error' : ''}`}
                                    />
                                )}
                            />
                            {errors.activityStatus && <span className="error-text">{errors.activityStatus.message}</span>}
                        </div>
                        <div className="form-control mt-6">

                                <button type="submit" className="btn btn-outline">Register</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
