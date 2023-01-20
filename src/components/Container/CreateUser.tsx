import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { IoSend } from 'react-icons/io5';

import { Button, Input, JSONOutput, Tabs } from '~/components';
import { ServerApiService } from '~/services';

type Form = {
  first_name: string;
  last_anme: string;
  email: string;
  password: string;
};

export function CreateUser() {
  const formMethods = useForm<Form>();
  const [jsonResult, setJsonResult] = useState<{ [key: string]: any }>();

  function onSubmit(values: Form) {
    toast.promise(ServerApiService.createUser(values), {
      loading: 'Loading...',
      success: (data) => {
        setJsonResult({ status: data.status, data: data.data, headers: data.headers });
        return 'Success!';
      },
      error: (data) => {
        setJsonResult(data.response.data);
        return 'Error!';
      },
    });
  }

  return (
    <Tabs
      tabs={[
        {
          label: 'Create User',
          Component: (
            <>
              <FormProvider {...formMethods}>
                <form
                  onSubmit={formMethods.handleSubmit(onSubmit)}
                  className="flex items-start justify-start flex-wrap gap-4 my-4"
                >
                  <Input name="first_name" label="Name" />
                  <Input name="last_name" label="Last name" />
                  <Input name="email" label="Email" className="flex-1" />
                  <Input name="password" label="Password" />
                  <Button type="submit" className="mt-8">
                    Send
                    <IoSend />
                  </Button>
                </form>
              </FormProvider>
              <JSONOutput json={jsonResult} />
            </>
          ),
        },
      ]}
    />
  );
}
