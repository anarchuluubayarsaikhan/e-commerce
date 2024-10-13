
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormik, FormikErrors } from "formik";
import Link from "next/link";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  homeAddress: string;
  nemeltMedeelel: string;
}
export function BuySteoTwo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      homeAddress: "",
      nemeltMedeelel: ""
    },
    onSubmit,
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.firstName) {
        errors.firstName = "Овог заавал бичнэ үү";
      }
      if (!values.lastName) {
        errors.lastName = "Нэр заавал бичнэ үү";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Утас аа заавал бичнэ үү";
      }
      if (!values.homeAddress) {
        errors.homeAddress = "Хаяг заавал бичнэ үү";
      }
      if (!values.nemeltMedeelel) {
        errors.nemeltMedeelel = "Нэмэлт мэдээлэл заавал бичнэ үү";
      }
      return errors;
    },
  });
  function onSubmit() {
    fetch(`http://localhost:4000/BuyStepTwo`, {
      method: "POST",
      body: JSON.stringify({
        values: formik.values,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        // Success
      } else {
        // error
      }
    });
  }
  console.log(formik.values);
  return (
    <div className="flex flex-col justify-center gap-6 mt-10">
      <div className="flex gap-5">
        <div className="w-[333px] py-6 px-6 flex flex-col gap-4 bg-slate-400 rounded-2xl mb-[230px]">
          <div className="flex gap-2 items-center">
            <span className="text-xl font-bold">Сагс</span>
            <span className="text-gray-400">(4)</span>
          </div>

          <div className="flex flex-col gap-4 border-dashed border-b-2 py-6">
            <div className="flex gap-6">
              <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
              <div className="flex flex-col gap-1 pb-1">
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
                <div className="text-sm font-normal">1*120000</div>
                <div className="text-base font-bold">120’000₮</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
              <div className="flex flex-col gap-1 pb-1">
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
                <div className="text-sm font-normal">1*120000</div>
                <div className="text-base font-bold">120’000₮</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
              <div className="flex flex-col gap-1 pb-1">
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
                <div className="text-sm font-normal">1*120000</div>
                <div className="text-base font-bold">120’000₮</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pb-8">
            <span className="text-base font-normal">Нийт төлөх дүн:</span>
            <span className="text-lg font-bold">120’000₮</span>
          </div>
        </div>
        <div className="w-[687px] bg-slate-400 rounded-2xl flex flex-col">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex flex-col gap-6 p-8">
                <div className="text-lg font-semibold">
                  2. Хүргэлтийн мэдээлэл оруулах
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Овог:</Label>
                  <Input
                    className="rounded-full border-2"
                    placeholder="Овог"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName ? (
                    <span className="text-red-500 text-sm text-start">
                      Овог оруулна уу
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Нэр:</Label>
                  <Input
                    className="rounded-full border-2"
                    placeholder="Нэр"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName ? (
                    <span className="text-red-500 text-sm text-start">
                      Нэр оруулна уу
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Утасны дугаар:</Label>
                  <Input
                    className="rounded-full border-2"
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phoneNumber ? (
                    <span className="text-red-500 text-sm text-start">
                      Утас аа заавал бичнэ үү
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Хаяг:</Label>
                  <Textarea
                    className="rounded-[18px] h-24 border-2"
                    id="homeAddress"
                    value={formik.values.homeAddress}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.homeAddress ? (
                    <span className="text-red-500 text-sm text-start">
                      Хаяг тодорхой оруулна уу
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium">Нэмэлт мэдээлэл:</Label>
                  <Textarea
                    className="rounded-[18px] border-2 h-16"
                    id="nemeltMedeelel"
                    value={formik.values.nemeltMedeelel}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.nemeltMedeelel ? (
                    <span className="text-red-500 text-sm text-start">
                      Нэмэлт мэдээлэл заавал оруулна уу
                    </span>
                  ) : null}
                  <span className="text-xs font-normal">
                    Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-between p-8">
            <button className="border-solid border-2 bg-white rounded-2xl px-9 py-2">Буцах</button>
            <Link href="/buysteptwo">
                <Button
                className="bg-primaryBlue hover:bg-blue-900 rounded-2xl px-9 py-2"
                type="submit"
                onClick={() => onSubmit()}
                >
                Төлбөр төлөх
                </Button>
            </Link>
           
          </div>
        </div>
      </div >
    </div>
  );
}