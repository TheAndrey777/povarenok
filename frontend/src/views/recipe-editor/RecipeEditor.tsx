import { Button } from "../../components/button/Button";
import { InputArea } from "../../components/input-area/InputArea";
import { Input } from "../../components/input/Input";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { Modal } from "../../components/navigation/modal/Modal";
import { IoClose } from "react-icons/io5";
import { cn } from "../../lib/cn";
const RecipeEditor = () => {
  const [ingredients, setIngredients] = React.useState<any[]>([]);
  const [modalActive, setModalActive] = React.useState<boolean>(false);

  const [createName, setCreateName] = React.useState<string>("");
  const [createCount, setCreateCount] = React.useState<string>("");
  const [createClick, setCreateClick] = React.useState<boolean>(false);

  const [createRecipeName, setCreateRecipeName] = React.useState<string>("");
  const [createRecipeImg, setCreateRecipeImg] = React.useState<string>("");
  const [createRecipeDescription, setCreateRecipeDescription] =
    React.useState<string>("");
  const [createRecipeTime, setCreateRecipeTime] = React.useState<string>("");
  const [createRecipeManual, setCreateRecipeManual] =
    React.useState<string>("");
  const [createRecipeClick, setCreateRecipeClick] =
    React.useState<boolean>(false);

  return (
    <div className="bg-layout-background w-full mb-[10px] rounded-[15px] relative text-default-500 pt-[20px] pb-[55px]">
      <div
        className={cn(
          "text-[14px] text-danger font-medium h-0 transition-all ml-[20px] mt-[20px] overflow-hidden",
          createRecipeClick && createRecipeName == "" && "h-[21px]"
        )}
      >
        Поле не может быть пустым
      </div>
      <Input
        label="Название"
        onChange={(v: any) => setCreateRecipeName(v)}
        required
        radius="sm"
        variant="flat"
        className="max-w-[350px] ml-[20px]"
      />
      <div
        className={cn(
          "text-[14px] text-danger font-medium h-0 transition-all ml-[20px] mt-[20px] overflow-hidden",
          createRecipeClick && createRecipeImg == "" && "h-[21px]"
        )}
      >
        Поле не может быть пустым
      </div>
      <Input
        label="Ссылка на изображение"
        onChange={(v: any) => setCreateRecipeImg(v)}
        required
        radius="sm"
        variant="flat"
        className="max-w-[350px] ml-[20px]"
      />

      <div
        className={cn(
          "text-[14px] text-danger font-medium h-0 transition-all ml-[20px] mt-[20px] overflow-hidden",
          createRecipeClick && createRecipeDescription == "" && "h-[21px]"
        )}
      >
        Поле не может быть пустым
      </div>
      <InputArea
        label="Описание"
        onChange={(v: any) => setCreateRecipeDescription(v)}
        required
        radius="sm"
        variant="flat"
        className="max-w-[650px] ml-[20px]"
      />

      <div
        className={cn(
          "text-[14px] text-danger font-medium h-0 transition-all ml-[20px] mt-[20px] overflow-hidden",
          createRecipeClick && createRecipeTime == "" && "h-[21px]"
        )}
      >
        Поле не может быть пустым
      </div>
      <Input
        label="Время приготовления"
        onChange={(v: any) => setCreateRecipeTime(v)}
        required
        radius="sm"
        variant="flat"
        className="max-w-[350px] ml-[20px]"
      />

      {/* ingredients */}
      <div className="ml-[20px] mt-[20px] text-[16px] font-semibold text-layout-foreground">
        Ингредиенты:
      </div>
      <div>
        {ingredients.map((v: any, i: number) => (
          <div
            key={i}
            className="flex ml-[30px] mb-[10px] items-center text-layout-foreground text-[14px] font-medium"
          >
            <div className="w-[250px] border-l-0 border-y-0 border-solid border-default-400 border-[1px] pr-[10px]">
              {v.name}
            </div>
            <div className="ml-[15px] w-[150px] text-wrap overflow-hidden">
              {" "}
              {v.count}{" "}
            </div>
            <div
              className="h-[30px] w-[30px] cursor-pointer  flex items-center justify-center bg-transparent duration-300 hover:bg-danger-200 rounded-md active:scale-90 transition-all scale-100"
              onClick={() =>
                setIngredients(
                  ingredients.filter((_: any, ii: number) => ii !== i)
                )
              }
            >
              <BiTrash className="h-[25px] w-[25px] text-default" />
            </div>
          </div>
        ))}
      </div>

      <Button
        className=" ml-[20px] mt-[20px]"
        text="Добавить"
        size="md"
        onClick={() => {
          setModalActive(true);
        }}
      />

      <div
        className={cn(
          "text-[14px] text-danger font-medium h-0 transition-all ml-[20px] mt-[20px] overflow-hidden",
          createRecipeClick && createRecipeManual == "" && "h-[21px]"
        )}
      >
        Поле не может быть пустым
      </div>
      <InputArea
        label="Способ приготовления"
        onChange={(v: any) => setCreateRecipeManual(v)}
        required
        radius="sm"
        variant="flat"
        className="max-w-[650px] ml-[20px]"
      />

      <Button
        className="absolute right-[20px] bottom-[20px]"
        text="Создать"
        size="md"
        onClick={() => {
          setCreateRecipeClick(true);
          if (
            createRecipeName == "" ||
            createRecipeTime == "" ||
            createRecipeDescription == "" ||
            createRecipeImg == "" ||
            createRecipeManual == ""
          )
            return;
          setCreateRecipeClick(false);
          console.log(
            createRecipeName,
            createRecipeTime,
            createRecipeDescription,
            createRecipeImg,
            createRecipeManual
          );
        }}
      />

      <Modal open={modalActive} onOpenChange={setModalActive}>
        <div className=" w-[500px] bg-layout-background rounded-[15px] relative border-solid border-default-200 border-[1px]">
          {/* {createStatus == "loading" && (
            <div className=" absolute h-full w-full flex items-center justify-center bg-layout-divider z-50">
              <Spiner />
            </div>
          )} */}
          <div
            className=" cursor-pointer absolute right-[15px] top-[15px] h-[25px] w-[25px] active:scale-[0.95] hover:scale-[1.15] transition-all duration-300 z-40 "
            onClick={() => {
              setModalActive(false);
              setCreateClick(false);
            }}
          >
            <IoClose className="cursor-pointer h-[25px] w-[25px]" />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full relative box-border px-[40px] transition-all">
              <div className="font-semibold text-[20px] text-content-1 pt-[30px] pb-[10px]  ">
                Создание офиса
              </div>
              <div className="text-[14px] text-content-1  pb-[10px]  ">
                Для создания офиса необходимо указать его адрес и название.
              </div>
              {createClick && createName == "" && (
                <div className="text-[14px] text-danger font-medium  h-[21px] transition-all">
                  Поле не может быть пустым
                </div>
              )}
              <Input
                required
                label="Название"
                radius="sm"
                size="md"
                className="w-full mb-[15px]"
                onChange={setCreateName}
              />

              <div
                className={cn(
                  "text-[14px] text-danger font-medium h-0 transition-all",
                  createClick && createCount == "" && "h-[21px]"
                )}
              >
                Поле не может быть пустым
              </div>

              <Input
                required
                label="Количество"
                radius="sm"
                size="md"
                className="w-full mb-[15px]"
                onChange={setCreateCount}
              />
              <div className="w-full flex  h-[75px] items-center justify-end">
                <Button
                  className="m-4"
                  size="md"
                  color="default"
                  onClick={() => {
                    setModalActive(false);
                    setCreateClick(false);
                  }}
                  text="Отмена"
                />
                <Button
                  size="md"
                  onClick={() => {
                    setCreateClick(true);
                    if (createCount == "" || createName == "") return;
                    setCreateClick(false);
                    setModalActive(false);
                    setIngredients((prevArray: any[]) => [
                      ...prevArray,
                      { name: createName, count: createCount },
                    ]);
                  }}
                  text="Создать"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default RecipeEditor;
