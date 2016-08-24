using System.Collections.Generic;

namespace ImplantChoice.Repository.Contracts
{
    public interface IRepository
    {
    }

    public interface IRepository<T, Tid> : IRepository
    {
        T GetById(Tid id);
        IEnumerable<T> GetAll();
        T Create(T dto);
        T Update(T dto);
        T Delete(T dto);
    }
}
