import { heading, caption } from "./../styles/components.module.css";
import styles from "./../styles/PageOne.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Controls from "./Controls";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
function pageOne({ navigator }) {
  const [Context, setContext] = navigator;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let schema = yup.object({
    userName: yup
      .string()
      .required()
      .min(8)
      .max(25)
      .matches(/^[a-z0-9]+$/i, "only letters, numbers"),
    phone: yup
      .string()
      .required()
      .matches(phoneRegExp, "not vaild phone number"),
    email: yup.string().email().required().min(12).max(80),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setContext({ ...Context, data: { ...Context.data, ...data }, step: 2 });
  };

  return (
    <>
    <div className="form_container">
      <h1 className={heading}>Personal Info</h1>
      <p className={caption}>
        Personal info Please provide your name, email address, and phone number.
      </p>
      <form className={styles.form_Control + "form"}>
        <div className={styles.input_group}>
          <div className="flex spaced__between">
            <span>User Name</span>
            <span className={errors?.userName ? "danger-text sm" : "faded"}>
              *{errors?.userName?.message}
            </span>
          </div>
          <input
            {...register("userName", { required: true, maxLength: 20 })}
            placeholder="John Doe"
            type="text"
            name="userName"
            className={errors?.userName ? "danger-border" : ""}
            value={Context.data?.userName}
          />
        </div>

        {/* email */}
        <div className={styles.input_group}>
          <div className="flex spaced__between">
            <span>Email</span>
            <span className={errors?.email ? "danger-text sm" : "faded"}>
              *{errors?.email?.message}
            </span>
          </div>

          <input
            {...register("email")}
            type="email"
            required
            placeholder="example@gmail.com"
            name="email"
            className={errors?.email ? "danger-border" : ""}
            value={Context.data?.email}
          />
        </div>
        {/* phone */}
        <div className={styles.input_group}>
          <div className="flex spaced__between">
            <span>Phone Number</span>
            <span className={errors?.phone ? "danger-text sm" : "faded"}>
              *{errors?.phone?.message}
            </span>
          </div>

          <input
            type="text"
            {...register("phone")}
            required
            placeholder="+20 012-200-292"
            name="phone"
            className={errors?.phone ? "danger-border" : ""}
            value={Context.data?.phone}
          />
        </div>
      </form>


    </div>
          <Controls
          navigator={[Context, setContext]}
          submiter={handleSubmit(onSubmit)}
        />
        </>
  );
}

export default pageOne;
