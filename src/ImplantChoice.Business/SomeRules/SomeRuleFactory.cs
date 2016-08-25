using Autofac;
using ImplantChoice.Business.Contracts;
using System.Threading.Tasks;

namespace ImplantChoice.Business.SomeRules
{
    public class SomeRuleFactory : ISomeRuleFactory
    {
        private readonly ILifetimeScope _container;

        public SomeRuleFactory(ILifetimeScope container)
        {
            _container = container;
        }
        public Task<ISomeRule> GetRule(string name)
        {
            return Task.FromResult(_container.ResolveNamed<ISomeRule>(name));
        }
    }
}
