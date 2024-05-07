import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import CheckBox from "./CheckBox";
const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size={`select-sm`}
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size={`select-sm`}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      <FormRange name="select price" size="range-sm" label="select price" />
      <CheckBox
        name="shipping"
        size="checkbox-sm"
        defaultValue={false}
        label="free shipping"
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
