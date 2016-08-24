using System;
using System.Collections.Generic;
using ImplantChoice.Repository.Contracts;
using ImplantChoice.Repository.Contracts.Dtos;
using SimpleNet.Core.Data;


namespace ImplantChoice.Repository
{
    public class InsuranceRepository : ImplantChoiceBaseRepo, IInsuranceRepository
    {
        // we need to inject these values!!!
        public InsuranceRepository( ISimpleDataAccessLayer database) : base( database )
        {
        }

        public Insurance Create(Insurance dto)
        {
            throw new NotImplementedException();
        }

        public Insurance Delete(Insurance dto)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Insurance> GetAll()
        {
            throw new NotImplementedException();
        }

        public Insurance GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Insurance Update(Insurance dto)
        {
            throw new NotImplementedException();
        }
    }
}
