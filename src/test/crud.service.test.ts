// Generated by CodiumAI

import CrudService from "../files/crud.service";
import CustomError from "../files/error.handler";
import { MyModel } from "./model";

describe("CrudService", () => {
  // Successfully create a new document and return it
  it("should create a new document and return it when the document does not already exist", async () => {
    // Arrange
    const modelData = {
      Model: MyModel,
      exempt: "-password",
    };

    const data = {
      name: "John Doe",
      age: 30,
    };

    const check = {
      name: "John Doe",
    };

    // Act
    const result = await CrudService.create({
      modelData,
      data,
      check,
    });

    // Assert
    expect(result.success_status).toBe(true);
    expect(result.data.name).toBe("John Doe");
    expect(result.data.age).toBe(30);
    expect(result.message).toBe("Successfully created");
  });

  // Throw an error if the document to be created already exists
  it("should throw an error when the document already exists", async () => {
    // Arrange
    const modelData = {
      Model: MyModel,
      exempt: "-password",
    };

    const data = {
      name: "John Doe",
      age: 30,
    };

    const check = {
      name: "John Doe",
    };

    // Act & Assert
    await expect(
      CrudService.create({
        modelData,
        data,
        check,
      })
    ).rejects.toThrowError(CustomError);
  });
});
