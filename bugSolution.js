The solution involves checking if `data` is null or undefined before accessing its properties.  This can be done using optional chaining (?.) or the && operator.

```javascript
// Solution
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('some_api_endpoint');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.name || 'Loading...'}</Text> {/* Optional chaining */}
      {/* Alternative using &&: */}
      {/* <Text>{data && data.name}</Text> */}
    </View>
  );
};
```

The optional chaining operator (?.) safely accesses the `name` property only if `data` is not null or undefined.  If `data` is null or undefined, it returns undefined, which is handled gracefully. The `|| 'Loading...'` provides a fallback value while waiting for data. The `&&` operator provides a similar conditional access, but returns nothing instead of undefined.