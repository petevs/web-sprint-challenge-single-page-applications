import * as Yup from "yup"

const formSchema = Yup.object().shape({
    name: Yup.string().min(2).required("name is required"),
    size: Yup.string().oneOf(['Small', 'Medium', 'Large', 'Extra-Large']),
    pepperoni: Yup.string(),
    sausage: Yup.string(),
    onions: Yup.string(),
    specialInstructions: Yup.string()
})

export default formSchema