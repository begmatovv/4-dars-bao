import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link className="btn btn-accent btn-sm" to="/products">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
