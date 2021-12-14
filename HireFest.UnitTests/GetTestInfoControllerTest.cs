using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;
using HireFest.Controllers;
using System.Collections.Generic;
using System.Linq;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class GetTestInfoControllerTest
    {
        [Test]
        public void ReturnValueOf_FetchTestInfoFunction_IsNotNull()
        {
            GetTestInfoController controller = new GetTestInfoController();
            Mock<IFetchService> mockObject = new Mock<IFetchService>();

            List<TestInformation> data = new List<TestInformation>()
            {
                new TestInformation()
                {
                    QuestionId = 1,
                    Question = "What ... ?",
                    Score = 2,
                    Time = 2,
                    OptionId = 1,
                    Description = "a",
                    IsAnswer = false
                },
                new TestInformation()
                {
                    QuestionId = 1,
                    Question = "What ... ?",
                    Score = 2,
                    Time = 2,
                    OptionId = 2,
                    Description = "b",
                    IsAnswer = true
                },
                new TestInformation()
                {
                    QuestionId = 1,
                    Question = "What ... ?",
                    Score = 2,
                    Time = 2,
                    OptionId = 3,
                    Description = "c",
                    IsAnswer = false
                },
                new TestInformation()
                {
                    QuestionId = 1,
                    Question = "What ... ?",
                    Score = 2,
                    Time = 2,
                    OptionId = 1,
                    Description = "d",
                    IsAnswer = false
                },
            };


            mockObject.Setup(m => m.FetchTestInfo(1)).Returns(data);
            var response = controller.GetTestInfo(1);

            Assert.NotNull(response);
            Assert.AreEqual(20, response.Count());
        }
    }
}
