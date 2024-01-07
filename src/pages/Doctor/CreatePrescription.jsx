
import React, { useState } from 'react';
import useCreatePrescription from '../../hooks/doctor/useCreatePrescription';
import toast from 'react-hot-toast';
const CreatePrescription = () => {
    const { addPrescription, error, loading } = useCreatePrescription();
    const [patientId, setPatientId] = useState('');
    const [medications, setMedications] = useState([
        {
            name: '',
            dosage: '',
            instructions: ''
        }
    ]);
    const [prescriptionInstructions, setPrescriptionInstructions] = useState('');

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedMedications = [...medications];
        updatedMedications[index][name] = value;
        setMedications(updatedMedications);
    };

    const handleAddMedication = () => {
        setMedications([...medications, { name: '', dosage: '', instructions: '' }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const prescriptionData = {
            patient_id: patientId,
            medications,
            instructions: prescriptionInstructions
        };
        console.log(prescriptionData);
        addPrescription(prescriptionData);
        if (!error) {
            toast.success('Prescription added successfully');
            resetForm();
        } else {
            toast.error('Something went wrong');
        }
    };
    
    const resetForm = () => {
        setPatientId('');
        setMedications([
            {
                name: '',
                dosage: '',
                instructions: ''
            }
        ]);
        setPrescriptionInstructions('');
    }

    return (
        <div className='route'>
            <h2 className='text-3xl py-4 font-medium'>Create a new Prescription</h2>
            <form onSubmit={handleSubmit} className='flex bg-zinc-100 flex-col w-[360px] justify-center gap-4 shadow-zinc-500 shadow-xl items-start p-4'>
                    <label htmlFor="">Patient ID</label>
                <input
                    type="text"
                    name="patient_id"
                    value={patientId}
                    onChange={(event) => setPatientId(event.target.value)}
                    placeholder="Patient ID"
                    className='border border-zinc-500 focus:outline-none rounded-md w-full p-2'
                />
                <div>
                {medications.map((medication, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            value={medication.name}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Medication Name"
                            className='border  rounded-md w-full p-1'
                        />
                        <div className='w-full'>
                        <input
                            type="text"
                            name="dosage"
                            value={medication.dosage}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Dosage"
                            className='border w-1/2 rounded-md  p-1'
                        />
                        <select
                            name="instructions"
                            value={medication.instructions}
                            onChange={(event) => handleInputChange(index, event)}
                            className='border w-1/2 rounded-md  p-1'
                        >
                            <option value="">Select Instruction</option>
                            <option value="ODAC">ODAC</option>
                            <option value="BDAC">BDAC</option>
                            <option value="BDPC">BDPC</option>
                            <option value="TDS">TDS</option>
                        </select>
                        </div>
                         <button type="button" onClick={handleAddMedication}>+</button>

                    </div>
                ))}
                </div>
                <input
                    type="text"
                    name="prescription_instructions"
                    value={prescriptionInstructions}
                    onChange={(event) => setPrescriptionInstructions(event.target.value)}
                    placeholder="Prescription Instructions"
                    className='border w-full border-zinc-500 focus:outline-none rounded-md  p-2'
                />
                <button type="submit" className='submit_button w-full'>Submit</button>
            </form>
        </div>
    );
};

export default CreatePrescription;