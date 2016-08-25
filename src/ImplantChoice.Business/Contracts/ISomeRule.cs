using System.Threading.Tasks;

namespace ImplantChoice.Business.Contracts
{
    public interface ISomeRule
    {
        // Returns 0 || 1 
        Task<int> Execute();
    }

}
