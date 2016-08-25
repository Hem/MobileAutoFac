using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

        public Task<Insurance> Create(Insurance dto)
        {
            throw new NotImplementedException();
        }

        public Task<Insurance> Delete(Insurance dto)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Insurance>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Insurance> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Insurance> Update(Insurance dto)
        {
            throw new NotImplementedException();
        }
    }
}
