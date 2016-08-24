using Autofac;
using ImplantChoice.Business.Contracts;

namespace ImplantChoice.Business.SomeRules
{
    public class SomeRuleFactory : ISomeRuleFactory
    {

        private readonly ILifetimeScope _container;

        public SomeRuleFactory(ILifetimeScope container)
        {
            _container = container;
        }
        public ISomeRule GetRule(string name)
        {
            return _container.ResolveNamed<ISomeRule>(name);
        }
    }
}
