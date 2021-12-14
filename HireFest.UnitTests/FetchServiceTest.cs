using System;
using System.Collections;
using System.Collections.Generic;
using HireFest.DAL.Models.Models;
using HireFest.Services;
using HireFestDAL.Classes;
using Moq;
using NUnit.Framework;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class FetchServiceTest
    {
        [Test]
        public void ReturnValueOf_FetchAssessmentInfoFunction_IsNotNull()
        {
            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.FetchAssessmentInfo());

            FetchService service = new FetchService();
            IEnumerable<AssessmentInformation> response = service.FetchAssessmentInfo();

            Assert.NotNull(response);
        }

        [Test]
        public void ReturnValueOf_FetchTestInfoFunction_IsNotNull()
        {
            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.FetchTestInfo(1));

            FetchService service = new FetchService();
            IEnumerable<TestInformation> response = service.FetchTestInfo(1);

            Assert.NotNull(response);
        }

        [Test]
        public void ReturnValueOf_FetchCandidateInfoFunction_IsNotNull()
        {
            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.FetchCandidateInfo());

            FetchService service = new FetchService();
            Profile response = service.FetchCandidateInfo();

            Assert.NotNull(response);
        }
    }
}
