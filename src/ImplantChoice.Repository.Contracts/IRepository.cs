using System.Collections.Generic;
using System.Threading.Tasks;

namespace ImplantChoice.Repository.Contracts
{
    public interface IRepository
    {
    }

    public interface IRepository<T, Tid> : IRepository
    {
        Task<T> GetById(Tid id);
        Task<IEnumerable<T>> GetAll();
        Task<T> Create(T dto);
        Task<T> Update(T dto);
        Task<T> Delete(T dto);
    }
}
